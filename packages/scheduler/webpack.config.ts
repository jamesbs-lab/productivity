import { join } from 'path'

export default {
  context: join(__dirname, "src"),
  entry: "./index.ts",
  output: {
    path: join(__dirname, "build"),
    publicPath: "/",
    filename: "scheduler.js"
  },
  mode: "production",
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.(t|s)$/,
        use: 'ts-loader',
      }
    ]
  }
}