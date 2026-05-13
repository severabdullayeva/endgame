import React from 'react'
import LessonHero from '../components/lesson/LessonHero/LessonHero'
import styles from '../pages/Lessons.module.css'
import PiecesSection from '../components/lesson/PiecesSection/PiecesSection'
import TacticsSection from '../components/lesson/TacticsSection/TacticsSection'

import Cta from '../components/common/Cta/Cta'

import quizImg from '../assets/cta/cta-quiz.png'
import Summary from '../components/lesson/Summary/Summary'
import { tacticsData } from '../components/data/tacticData'

import PuzzleBox from '../components/quiz/PuzzleBox'




const Lessons = () => {
  return (
    <main>

      <section className={styles.heroSection}>
        <div className="container">
          <LessonHero />
        </div>
      </section>

      <section id='lesson' className={styles.piecesSection}>
        <div className="container">

          <PiecesSection />

        </div>
      </section>

      <section className={styles.tacticsSection}>
        <div className="container">
          <TacticsSection />
        </div>
      </section>

      <section>
        <div className={`container section-lg`}>
          <Summary data={tacticsData} />
        </div>
      </section>

      <section>
        <div>
          <Cta
            title="Test your knowledge"
            text="Solve chess puzzles and improve your tactics..."
            buttonText="Start Quiz"
            link="/learn/quiz"
            image={quizImg}
          />
        </div>
      </section>



    

    </main>
  )
}

export default Lessons