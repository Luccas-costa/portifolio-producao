import styles from '@/styles/tilt.module.css'

interface TiltProps {
  color: number
}

const Tilt = ({ color }: TiltProps) => {
  return (
    <div className={styles.customShapeDividerTop}>
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
          className={`${color === 1 ? styles.shapeFill2 : styles.shapeFill}`}
        ></path>
      </svg>
    </div>
  )
}

export default Tilt
