/* eslint-disable no-undef */
import Nightmare from 'nightmare';
import assert from 'assert';

Nightmare.action('getTexts', function (selector, done) {
  this.evaluate_now(
    (selector) => {
      return [].slice
        .call(document.querySelectorAll(selector))
        .map((e) => e.innerText);
    },
    done,
    selector
  );
});

describe('じゃんけんアプリ', () => {
  const nightmare = Nightmare({ show: false });
  const URL = 'http://localhost:8080/';

  it('アクセスすると「じゃんけん・ぽん！」と表示される', (done) => {
    nightmare
      .goto(URL)
      .evaluate(() => {
        return document.querySelector('h1').innerText;
      })
      .then((title) => {
        assert.equal(title, 'じゃんけん・ぽん！');
        done();
      });
  });

  it('グーをクリックすると対戦が行われ、対戦結果が表示される', (done) => {
    nightmare
      .goto(URL)
      .click('#btn-guu')
      .getTexts('tbody td')
      .then((texts) => {
        const [time, human_hand, comuputer_hand, judgement] = texts;
        assert.notEqual(time, '');
        assert.equal(human_hand, 'グー');
        assert.ok(comuputer_hand.match(/^(グー|チョキ|パー)$/));
        assert.ok(judgement.match(/^(WIN|LOSE|DRAW)$/));
        done();
      });
  });

  it('グーをクリックした後に RESULT POINT をクリックすると、対戦成績が表示される', (done) => {
    nightmare
      .goto(URL)
      .click('#btn-guu')
      .click('#tab-status')
      .getTexts('tbody td')
      .then((texts) => {
        const [win, lose, draw] = texts.map((e) => Number(e));
        assert.ok(win > 0 || lose > 0 || draw > 0);
        assert.equal(win + lose + draw, 1);
        done();
      });
  });

  it('2回クリックすると、対戦結果が2行表示される', (done) => {
    nightmare
      .goto(URL)
      .click('#btn-guu')
      .click('#btn-paa')
      .getTexts('tbody tr')
      .then((texts) => {
        assert.equal(texts.length, 2);
        done();
      });
  });
});
