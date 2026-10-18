<script setup lang="ts">
import { ref } from 'vue'
import MaterialCard from '../components/MaterialCard.vue'
import { assetUrl, materials, milestones, project } from '../data/research'
const menuOpen = ref(false)
const audience = ref<'all' | 'ai' | 'non'>('all')
const links = [
  { id: 'study', text: 'The study' },
  { id: 'method', text: 'Method' },
  { id: 'questionnaire', text: 'Questionnaire' },
  { id: 'progress', text: 'Progress' },
  { id: 'materials', text: 'Materials' },
]
const selectAudience = (value: 'all' | 'ai' | 'non') => {
  audience.value = value
}
</script>
<template>
  <a class="skip-link" href="#main">Skip to content</a>
  <header class="site-header">
    <a class="brand" href="#" aria-label="Group D home"
      ><span class="brand-mark">D<span>.</span></span
      ><span>ADS401<span class="brand-sub">RESEARCH PROJECT</span></span></a
    >
    <button
      class="menu-toggle"
      type="button"
      :aria-expanded="menuOpen"
      aria-controls="main-navigation"
      @click="menuOpen = !menuOpen"
    >
      {{ menuOpen ? 'Close menu −' : 'Menu +' }}
    </button>
    <nav id="main-navigation" :class="{ open: menuOpen }" aria-label="Main navigation">
      <a v-for="link in links" :key="link.id" :href="`#${link.id}`" @click="menuOpen = false">{{
        link.text
      }}</a
      ><a class="nav-github" :href="project.repository" target="_blank" rel="noopener">GitHub ↗</a>
    </nav>
  </header>
  <main id="main">
    <section class="hero section-shell">
      <div class="hero-copy">
        <p class="eyebrow"><span></span> XJTLU · GROUP D · ADS401</p>
        <h1>A better CV.<br />What does <em>AI</em><br />bring to it?</h1>
        <p class="hero-intro">
          Understanding AI use and student satisfaction in CV preparation for jobs and postgraduate
          study.
        </p>
        <div class="hero-actions">
          <a class="button dark" href="#study">Explore the research <span>↗</span></a
          ><a class="quiet-link" href="#materials">View materials <span>↓</span></a>
        </div>
        <p class="hero-note">
          A study of real experiences. An evaluation of reported satisfaction.
        </p>
      </div>
      <div
        class="hero-visual"
        aria-label="Study diagram: AI use and non-AI use lead to the same CV satisfaction question"
      >
        <div class="visual-top"><span>THE RESEARCH QUESTION</span><span>01 / D</span></div>
        <div class="paper">
          <div class="paper-heading">
            <span class="paper-icon">CV</span
            ><span>One recent experience<small>Job or postgraduate application</small></span
            ><span class="paper-dot"></span>
          </div>
          <div class="paper-lines"><i></i><i></i><i></i></div>
          <div class="visual-paths"><span>Used AI</span><span>Did not use AI</span></div>
          <div class="join-line"></div>
          <div class="rating-label">The same satisfaction question</div>
          <div class="rating-scale">
            <span v-for="n in 7" :key="n">{{ n }}</span>
          </div>
          <div class="scale-captions">
            <span>Very dissatisfied</span><span>Very satisfied</span>
          </div>
        </div>
        <div class="visual-bottom">
          <span class="cross">+</span>
          <p>Different approaches.<br /><strong>A shared measure.</strong></p>
          <span class="visual-caption">STUDY DESIGN<br />NOT COLLECTED DATA</span>
        </div>
      </div>
    </section>
    <div class="facts-strip">
      <div><span>CONTEXT</span><strong>Jobs &amp; postgraduate study</strong></div>
      <div><span>PARTICIPANTS</span><strong>XJTLU final-year students</strong></div>
      <div><span>APPROACH</span><strong>Retrospective survey</strong></div>
      <div>
        <span>CURRENT STAGE</span><strong><i></i> Research preparation</strong>
      </div>
    </div>
    <section id="study" class="section-shell study-section">
      <div class="section-label">
        <span>01 / THE STUDY</span><span>Real experiences, carefully interpreted.</span>
      </div>
      <div class="study-grid">
        <h2>One question.<br /><em>Two approaches.</em></h2>
        <div>
          <p class="research-question">{{ project.question }}</p>
          <p>
            We ask students to recall their most recent CV preparation or revision within the past
            six months. The study includes both job and postgraduate applications.
          </p>
          <div class="study-notes">
            <div>
              <span>ALSO EXPLORING</span>
              <p>
                What students use AI for, how they rate its functions, and the benefits and
                difficulties they report.
              </p>
            </div>
            <div>
              <span>WHAT WE MEASURE</span>
              <p>
                Self-reported satisfaction and experience, rather than independently assessed CV
                quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="method" class="method-section">
      <div class="section-shell">
        <div class="section-label">
          <span>02 / RESEARCH DESIGN</span><span>From experience to evidence.</span>
        </div>
        <div class="section-heading">
          <h2>A clear method.<br />A considered comparison.</h2>
          <p>
            An observational study of existing behaviour. Participants are not assigned to use or
            avoid AI.
          </p>
        </div>
        <div class="method-grid">
          <article>
            <span class="step-no">01</span>
            <h3>Find the participants</h3>
            <p>
              XJTLU final-year undergraduates aged 18 or above who prepared or revised a CV in the
              past six months.
            </p>
            <div class="method-foot">Convenience sampling + peer referrals</div>
          </article>
          <article>
            <span class="step-no">02</span>
            <h3>Recall one experience</h3>
            <p>
              Everyone answers the same 1–7 CV satisfaction item. Further questions follow their
              actual AI use in that experience.
            </p>
            <div class="method-foot">40–60 responses planned, not collected</div>
          </article>
          <article>
            <span class="step-no">03</span>
            <h3>Compare with care</h3>
            <p>
              A two-sided Mann–Whitney U test compares the two independent groups. We report
              distributions, effect size and uncertainty.
            </p>
            <div class="method-foot">Ordinal scores · independent groups</div>
          </article>
        </div>
        <div class="method-caution">
          <span aria-hidden="true">↳</span>
          <p>
            We examine the relationship between AI use and satisfaction; prior experience and other
            factors may also influence the results.
          </p>
        </div>
        <a
          class="method-source"
          href="https://www.itl.nist.gov/div898/software/dataplot/refman1/auxillar/ranksum.htm"
          target="_blank"
          rel="noopener"
          >Method reference: NIST, Rank Sum Test ↗</a
        >
      </div>
    </section>
    <section id="questionnaire" class="section-shell questionnaire-section">
      <div class="section-label">
        <span>03 / QUESTIONNAIRE</span><span>One shared question. Relevant follow-ups.</span>
      </div>
      <div class="questionnaire-grid">
        <div>
          <h2>Built around<br /><em>your experience.</em></h2>
          <p>
            The agreed questionnaire has 14 questions in total. Each respondent sees only the branch
            relevant to their experience.
          </p>
          <div class="notice">
            <span class="status-dot"></span>
            <div>
              <strong>Survey preparation</strong>
              <p>
                The online form still needs to be checked against the agreed flow. Recruitment is
                not announced on this page.
              </p>
            </div>
          </div>
          <a
            class="text-link"
            :href="assetUrl('images/questionnaire-flow.png')"
            target="_blank"
            rel="noopener"
            >Open the complete questionnaire flow ↗</a
          >
        </div>
        <div class="survey-preview">
          <div class="preview-title"><span>QUESTIONNAIRE GUIDE</span><span>14 QUESTIONS</span></div>
          <div class="audience-buttons" role="group" aria-label="Questionnaire audience">
            <button
              v-for="option in [
                { value: 'all', label: 'Everyone' },
                { value: 'ai', label: 'AI users' },
                { value: 'non', label: 'Non-users' },
              ]"
              :key="option.value"
              type="button"
              :aria-pressed="audience === option.value"
              @click="selectAudience(option.value as 'all' | 'ai' | 'non')"
            >
              {{ option.label }}
            </button>
          </div>
          <div class="survey-panel" aria-live="polite">
            <template v-if="audience === 'all'"
              ><p class="overline">SHARED QUESTIONS · 01–07</p>
              <h3>A common starting point</h3>
              <ul>
                <li>Read the information sheet and give consent</li>
                <li>Confirm eligibility and application background</li>
                <li>Report AI use in the most recent experience</li>
                <li>Rate satisfaction with the CV from 1 to 7</li>
              </ul>
              <p class="branch-note">
                Unsure or undisclosed AI use: submit after the shared questions.
              </p></template
            ><template v-else-if="audience === 'ai'"
              ><p class="overline">AI BRANCH · 10–14</p>
              <h3>What was the experience like?</h3>
              <ul>
                <li>Perceived help and purposes of use</li>
                <li>Optional benefits or difficulties</li>
                <li>Inaccurate or unsupported suggestions</li>
                <li>Function ratings, with “not used” available</li>
              </ul>
              <p class="branch-note">Rate only functions you actually used.</p></template
            ><template v-else
              ><p class="overline">NON-AI BRANCH · 08–09</p>
              <h3>Understand the choice</h3>
              <ul>
                <li>Reasons for not using AI in this experience</li>
                <li>Willingness to try AI in the future</li>
              </ul>
              <p class="branch-note">Non-users are not asked to rate AI helpfulness.</p></template
            >
          </div>
          <div class="preview-footer">Voluntary participation · No CV uploads requested</div>
        </div>
      </div>
    </section>
    <section id="progress" class="progress-section section-shell">
      <div class="section-label">
        <span>04 / PROJECT JOURNAL</span><span>Updated {{ project.updated }}</span>
      </div>
      <div class="section-heading">
        <h2>Research in progress.</h2>
        <p>
          A record of what is prepared and what comes next. No pilot findings or analysed survey
          results are available here yet.
        </p>
      </div>
      <ol class="timeline">
        <li
          v-for="item in milestones"
          :key="item.stage"
          :class="{ current: item.status === 'Current stage' }"
        >
          <span class="timeline-number">{{ item.stage }}</span>
          <div>
            <div class="timeline-heading">
              <h3>{{ item.title }}</h3>
              <span class="tag">{{ item.status }}</span>
            </div>
            <p>{{ item.detail }}</p>
          </div>
        </li>
      </ol>
    </section>
    <section id="materials" class="materials-section">
      <div class="section-shell">
        <div class="section-label">
          <span>05 / OPEN MATERIALS</span><span>Read the design behind the study.</span>
        </div>
        <div class="section-heading">
          <h2>The research, documented.</h2>
        </div>
        <div class="materials-grid">
          <MaterialCard v-for="material in materials" :key="material.path" :material="material" />
        </div>
        <p class="privacy-note">
          Public copies exclude the signed submission cover. Raw survey responses and participant
          identifiers are not published.
        </p>
      </div>
    </section>
  </main>
  <footer class="site-footer section-shell">
    <div class="footer-brand">
      <span class="brand-mark">D<span>.</span></span>
      <p>Student experiences.<br />Thoughtful evaluation.</p>
    </div>
    <div>
      <strong>ADS401 · Group D</strong>
      <p>Xi’an Jiaotong-Liverpool University<br />Coursework research project · 2026</p>
    </div>
    <a :href="project.repository" target="_blank" rel="noopener">View repository ↗</a
    ><a href="#">Back to top ↑</a>
  </footer>
</template>
