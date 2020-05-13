class Janken {
  constructor() {
    this.scores = [];
    this.statuses = [0, 0, 0];
  }

  pon(human_hand) {
    const computer_hand = Math.floor(Math.random() * 3);
    const judgement = (computer_hand - human_hand + 3) % 3;
    this.scores.push({
      human_hand,
      computer_hand,
      judgement,
      created_at: new Date(),
    });
    this.statuses[judgement]++;
  }

  getScores() {
    return this.scores.slice().reverse();
  }

  getStatuses() {
    return {
      draw: this.statuses[0],
      win: this.statuses[1],
      lose: this.statuses[2],
    };
  }
}

export default Janken;
