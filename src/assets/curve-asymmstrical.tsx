import styles from '@/styles/curve-asymmstrical.module.css'

const CurveAsymmstrical = () => {
  return (
    <div className={styles.customShapeDivider}>
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0V6c0,21.6,291,111.46,741,110.26,445.39,3.6,459-88.3,459-110.26V0Z"
          className={styles.shapeFill}
        />
      </svg>
    </div>
  )
}

export default CurveAsymmstrical
