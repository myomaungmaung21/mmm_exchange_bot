// importing from thirdparty
import { HookNextFunction, model, Schema } from 'mongoose'
import bcrypt from 'bcrypt'

const userSchema = new Schema(
  {
    local: {
      username: String,
      email: {
        type: String,
        unique: true,
        index: true,
        sparse: true,
        lowercase: true,
        trim: true
      },
      password: String,
      emailVerified: { type: Boolean, default: false }
    },
    facebook: {
      id: { type: String, unique: true, index: true, sparse: true },
      token: String,
      email: { type: String, unique: true },
      name: String
    }
  },
  { timestamps: true }
)

userSchema.pre('save', function (next: HookNextFunction) {
  let user: any = this
  if (user.isModified('local.password')) {
    bcrypt.genSalt(12, (err, salt) => {
      if (err) {
        return next(err)
      }
      bcrypt.hash(user.local.password, salt, (error, hash) => {
        if (error) {
          return next(error)
        }
        user.local.password = hash
        return next()
      })
    })
  }
})

userSchema.method('comparePassword', function (
  candidatePassword,
  next: HookNextFunction
) {
  let user: any = this
  bcrypt.compare(candidatePassword, user.local.password, function (err, _same) {
    if (err) next(err)
    return next()
  })
})

export default model('user', userSchema)
