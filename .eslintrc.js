module.exports = {
  root: true, // 作用的目录是根目录
  extends: [
    'airbnb'
  ],
  env: {
    "browser": true,
  },
  rules: {
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "react/button-has-type": 0
  }
}
