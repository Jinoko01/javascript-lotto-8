import InputView from './view/InputView.js';

class App {
  async run() {
    const inputView = new InputView();
    const purchaseAmount = await inputView.getPurChaseAmount();
    console.log(purchaseAmount);
  }
}

export default App;
