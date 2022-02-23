import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Hvordan gjøre det?',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Det du trenger for å bevege deg rundt i kryptouniverset og bli en del av Web3.
      </>
    ),
  },
  {
    title: 'Ordliste',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        For deg som har lurt på hva de forskjellige ordene du hører og leser om betyr. Sjekk ut <code>ordlisten</code> for å kunne delta i samtalen.
      </>
    ),
  },
  {
    title: 'Doodles',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Der jeg skriver om de tingene jeg leser om og som jeg synes er spennende. Og hvor jeg går mer i dybden på de tingene som popper opp rundt omkring.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div class="card-demo">
      <div class="card">
        <div class="card__header">
          <div class="avatar">
            <img
              class="avatar__photo"
              src="https://avatars1.githubusercontent.com/u/4060187?s=460&amp;v=4"
            />
            <div class="avatar__intro">
              <div class="avatar__name">Jared Palmer</div>
              <small class="avatar__subtitle">
                Consultant, Speaker, Lead Engineer
              </small>
            </div>
          </div>
        </div>
        <div class="card__image">
          <img
            src="https://images.unsplash.com/photo-1501619951397-5ba40d0f75da?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1655&amp;q=80"
            alt="Image alt text"
            title="Logo Title Text 1"
          />
        </div>
        <div class="card__footer">
          <div class="button-group button-group--block">
            <button class="button button--secondary">Like</button>
            <button class="button button--secondary">Comment</button>
            <button class="button button--secondary">Share</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
