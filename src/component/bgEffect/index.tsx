import { useEffect, useRef } from "react"

const X_SPEED = 0.1
const X_SPEED_VARIANCE = 0.5

const Y_SPEED = 1
const Y_SPEED_VARIANCE = 0.5

const SIZE = 6
const SIZE_VARIANCE = 4

const FLIP_SPEED_VARIANCE = 0.005

// Snowflake class
class Snowflake {
  x: number
  y: number
  size: number = 0
  opacity: number = 0
  flip: number = 0
  xSpeed: number = 0
  ySpeed: number = 0
  flipSpeed: number = 0

  constructor(
    private canvas: HTMLCanvasElement,
    private ctx: CanvasRenderingContext2D,
  ) {
    this.x = Math.random() * canvas.width
    this.y = Math.random() * canvas.height * 2 - canvas.height

    this.initialize()
  }

  initialize() {
    this.size = SIZE + Math.random() * SIZE_VARIANCE
    this.opacity = this.size / (SIZE + SIZE_VARIANCE + 5) // Adjust opacity based on size
    this.flip = Math.random() * Math.PI * 2 // Initial random rotation

    this.xSpeed = X_SPEED + Math.random() * X_SPEED_VARIANCE * (Math.random() < 0.5 ? 1 : -1) // Random horizontal drift
    this.ySpeed = Y_SPEED + Math.random() * Y_SPEED_VARIANCE
    this.flipSpeed = Math.random() * FLIP_SPEED_VARIANCE * (Math.random() < 0.5 ? 1 : -1) // Random rotation speed
  }

  draw() {
    if (this.y > this.canvas.height || this.x < -this.size || this.x > this.canvas.width + this.size) {
      this.initialize()

      // Reset position to top with some randomness
      this.x = Math.random() * this.canvas.width
      this.y = -this.size
    }

    this.ctx.save()
    this.ctx.translate(this.x, this.y)
    this.ctx.rotate(this.flip)
    this.ctx.beginPath()
    this.ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2) // Draw a circle for snowflake
    this.ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`
    this.ctx.fill()
    this.ctx.restore()
  }

  animate() {
    this.x += this.xSpeed
    this.y += this.ySpeed
    this.flip += this.flipSpeed
    this.draw()
  }
}

export const BGEffect = () => {
  const ref = useRef<HTMLCanvasElement>({} as HTMLCanvasElement)

  const snowflakesRef = useRef<Snowflake[]>([])

  const resizeTimeoutRef = useRef(0)
  const animationFrameIdRef = useRef(0)

  useEffect(() => {
    const canvas = ref.current

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D

    const getSnowflakeNum = () => {
      return Math.floor((window.innerWidth * window.innerHeight) / 10000) // More snowflakes for a snow effect
    }

    const initializeSnowflakes = () => {
      const count = getSnowflakeNum()
      const snowflakes = []
      for (let i = 0; i < count; i++) {
        snowflakes.push(new Snowflake(canvas, ctx))
      }
      snowflakesRef.current = snowflakes
    }

    initializeSnowflakes()

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      snowflakesRef.current.forEach((snowflake) => snowflake.animate())
      animationFrameIdRef.current = requestAnimationFrame(render)
    }

    render()

    const onResize = () => {
      clearTimeout(resizeTimeoutRef.current)
      resizeTimeoutRef.current = window.setTimeout(() => {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        const newSnowflakeNum = getSnowflakeNum()
        if (newSnowflakeNum > snowflakesRef.current.length) {
          for (let i = snowflakesRef.current.length; i < newSnowflakeNum; i++) {
            snowflakesRef.current.push(new Snowflake(canvas, ctx))
          }
        } else if (newSnowflakeNum < snowflakesRef.current.length) {
          snowflakesRef.current.splice(newSnowflakeNum)
        }
      }, 100)
    }

    window.addEventListener("resize", onResize)

    return () => {
      window.removeEventListener("resize", onResize)
      cancelAnimationFrame(animationFrameIdRef.current)
    }
  }, [])

  return (
    <div className="bg-effect">
      <canvas ref={ref} />
    </div>
  )
}
