import styles from '@/styles/button-slider.module.css'
import Link from 'next/link'

export default function ButtonSlider() {
  return (
    <Link
      href="/contact?goingTo=contact"
      className={`${styles.button} relative flex h-[3.5em] cursor-pointer select-none items-center overflow-hidden rounded-[1.2em] bg-[#E97511] px-[1.5em] pr-[4em] text-[20px] font-medium text-white shadow-[inset_0_0_1.6em_-0.6em_#714da6]`}
    >
      Contate-me
      <div className={styles.icon}>
        <svg
          height="28"
          width="28"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path
            d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </Link>
  )
}
