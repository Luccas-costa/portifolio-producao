'use client'
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

export default function IntroAnimation() {
  const [yValue1, setYValue1] = useState(-320) // T | O
  const [yValue2, setYValue2] = useState(155) // E | A
  const [yValue3, setYValue3] = useState(480) // K | G
  const [yValue4, setYValue4] = useState(-480) // B

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setYValue1(-320)
        setYValue2(155)
        setYValue3(480)
        setYValue4(-480)
      } else if (window.innerWidth > 700) {
        setYValue1(-217)
        setYValue2(115)
        setYValue3(335)
        setYValue4(-327)
      } else if (window.innerWidth > 450) {
        setYValue1(-146)
        setYValue2(74)
        setYValue3(225)
        setYValue4(-223)
      } else if (window.innerWidth < 450) {
        setYValue1(-102)
        setYValue2(52)
        setYValue3(150)
        setYValue4(-152)
      }
    }

    handleResize() // Executa na montagem para definir o valor inicial
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="fixed left-1/2 top-1/2 flex h-[160px] max-h-14 w-[900px] -translate-x-1/2 -translate-y-[70%] items-center justify-center gap-0 overflow-hidden font-montserrat text-[50px] font-black text-zinc-200 screen450:max-h-20 screen450:text-[80px] screen700:max-h-32 screen700:text-[120px] screen900:max-h-36 screen900:text-[160px]">
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: yValue1 }}
        transition={{
          duration: 0.4,
          bounce: 0.2,
          delay: 0,
          type: 'spring',
          stiffness: 400,
          damping: 80,
          mass: 1,
        }}
      >
        <div className="translate-y-[74px] screen450:translate-y-[118px] screen700:translate-y-[175px] screen900:translate-y-[240px]">
          T
        </div>
        <div className="translate-y-[50px] screen450:translate-y-[70px] screen700:translate-y-[105px] screen900:translate-y-[160px]">
          T
        </div>
        <div className="translate-y-[25px] screen700:translate-y-[35px] screen900:translate-y-[80px]">
          T
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 0 }}
        animate={{ y: yValue2 }}
        transition={{
          duration: 0.4,
          bounce: 0.2,
          delay: 0,
          type: 'spring',
          stiffness: 400,
          damping: 80,
          mass: 1,
        }}
      >
        <div className="translate-y-[-16px] screen700:translate-y-[-25px] screen900:translate-y-[-35px]">
          E
        </div>
        <div className="translate-y-[-39px] screen450:translate-y-[-62px] screen700:translate-y-[-95px] screen900:translate-y-[-120px]">
          E
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 0 }}
        animate={{ y: yValue3 }}
        transition={{
          duration: 0.4,
          bounce: 0.2,
          delay: 0,
          type: 'spring',
          stiffness: 400,
          damping: 80,
          mass: 1,
        }}
      >
        <div className="translate-y-[-40px] screen450:translate-y-[-47px] screen700:translate-y-[-65px] screen900:translate-y-[-120px]">
          K
        </div>
        <div className="translate-y-[-66px] screen450:translate-y-[-90px] screen700:translate-y-[-135px] screen900:translate-y-[-200px]">
          K
        </div>
        <div className="translate-y-[-92px] screen450:translate-y-[-136px] screen700:translate-y-[-205px] screen900:translate-y-[-280px]">
          K
        </div>
        <div className="translate-y-[-114px] screen450:translate-y-[-182px] screen700:translate-y-[-275px] screen900:translate-y-[-360px]">
          K
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 0 }}
        animate={{ y: yValue1 }}
        transition={{
          duration: 0.4,
          bounce: 0.2,
          delay: 0,
          type: 'spring',
          stiffness: 400,
          damping: 80,
          mass: 1,
        }}
      >
        <div className="translate-y-[74px] screen450:translate-y-[118px] screen700:translate-y-[175px] screen900:translate-y-[240px]">
          O
        </div>
        <div className="translate-y-[50px] screen450:translate-y-[70px] screen700:translate-y-[105px] screen900:translate-y-[160px]">
          O
        </div>
        <div className="translate-y-[25px] screen700:translate-y-[35px] screen900:translate-y-[80px]">
          O
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 0 }}
        animate={{ y: yValue4 }}
        transition={{
          duration: 0.4,
          bounce: 0.2,
          delay: 0,
          type: 'spring',
          stiffness: 400,
          damping: 80,
          mass: 1,
        }}
      >
        <div className="translate-y-[111px] screen450:translate-y-[178px] screen700:translate-y-[265px] screen900:translate-y-[360px]">
          B
        </div>
        <div className="translate-y-[87px] screen450:translate-y-[131px] screen700:translate-y-[195px] screen900:translate-y-[280px]">
          B
        </div>
        <div className="translate-y-[62px] screen450:translate-y-[85px] screen700:translate-y-[125px] screen900:translate-y-[200px]">
          B
        </div>
        <div className="translate-y-[37px] screen450:translate-y-[40px] screen700:translate-y-[55px] screen900:translate-y-[120px]">
          B
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 0 }}
        animate={{ y: yValue2 }}
        transition={{
          duration: 0.4,
          bounce: 0.2,
          delay: 0,
          type: 'spring',
          stiffness: 400,
          damping: 80,
          mass: 1,
        }}
      >
        <div className="translate-y-[-16px] screen700:translate-y-[-25px] screen900:translate-y-[-35px]">
          A
        </div>
        <div className="translate-y-[-39px] screen450:translate-y-[-62px] screen700:translate-y-[-95px] screen900:translate-y-[-120px]">
          A
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 0 }}
        animate={{ y: yValue3 }}
        transition={{
          duration: 0.4,
          bounce: 0.2,
          delay: 0,
          type: 'spring',
          stiffness: 400,
          damping: 80,
          mass: 1,
        }}
      >
        <div className="translate-y-[-40px] screen450:translate-y-[-47px] screen700:translate-y-[-65px] screen900:translate-y-[-120px]">
          G
        </div>
        <div className="translate-y-[-60px] screen450:translate-y-[-90px] screen700:translate-y-[-135px] screen900:translate-y-[-200px]">
          G
        </div>
        <div className="translate-y-[-92px] screen450:translate-y-[-136px] screen700:translate-y-[-205px] screen900:translate-y-[-280px]">
          G
        </div>
        <div className="translate-y-[-114px] screen450:translate-y-[-182px] screen700:translate-y-[-275px] screen900:translate-y-[-360px]">
          G
        </div>
      </motion.div>
    </div>
  )
}
