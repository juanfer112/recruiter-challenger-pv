class TransactionProcessor {
  // QUESTION: COMPLETE ALL CLASS FUNCTIONS TO PASS THE TESTS

  constructor(transactions) {
    this.transactions = transactions;
  }

  print(tx) {
    console.log(
      `ID: ${tx.id} - Brand: ${tx.brand} - Currency: ${tx.currency} - Amount: ${tx.amount}`
    );
  }

 // Check valid transactions rules
  static isValidTransaction(transaction) {
    // ... Verifica que una transaccion no sea entero y menor a cero
    const isValid = (TransactionProcessor.isValidAmount(transaction) && 
    TransactionProcessor.isValidBrand(transaction) &&
    TransactionProcessor.isValidCurrency(transaction) &&
    TransactionProcessor.isValidID(transaction)); //!Number.isInteger(transaction.amount) && (transaction.amount >= 0);

    return isValid;
  }

  // Remove invalid transactions
  filterInvalidTransactions() {
    // ...
    this.transactions = this.transactions.filter(transaction => {
      return !TransactionProcessor.isValidTransaction(transaction);
      /*return (TransactionProcessor.isValidTransaction(transaction) && 
        this.isValidBrand(transaction) &&  
        this.isValidCurrency(transaction) && 
        this.isValidID(transaction)
      );*/
    });
    return this;
  }

  static isValidAmount(transaction) {
    return (!Number.isInteger(transaction.amount) && (transaction.amount >= 0));
  }
  
  static isValidBrand(transaction){
    return (transaction.brand == transaction.brand.toLowerCase());
  }

  static isValidCurrency(transaction){
    return (transaction.currency == transaction.currency.toUpperCase());
  }

  static isValidID(transaction){
    return (transaction.id > 0);
  }

  // Return transactions of given currency
  getTransactionsByCurrency(currency) {
    this.transactions = this.transactions.filter(transaction => transaction.currency == currency);    
    return this;
  }

  // Return transactions of given brand
  getTransactionsByBrand(brand) {
    this.transactions = this.transactions.filter(transaction => transaction.brand == brand); 
    return this;
  }

  // BONUS:
  // Apply multiple filters. Filters parameter should be an array of functions (predicates)
  filterTransaction(filters) {
    // Filter and get the valid transaction 
    this.transactions = this.transactions.filter((transaction) => {
      //maping throught array of function  
      let mapFilter = filters.map((filter) => filter(transaction));
      //[true, true, true] -- TRUE
      //[true, false, true] -- FALSE
      return mapFilter.reduce((acc, el) => acc && el)
    });
    return this;
  }

  // Return the total amount of current transactions array
  sum() {    
    const total = parseFloat(this.transactions
    .filter(transaction => TransactionProcessor.isValidTransaction(transaction))
    .reduce((acc, el) => acc + el.amount, 0)
    .toFixed(2));
    
    /*const total = this.transactions
      .filter(transaction => TransactionProcessor.isValidTransaction(transaction))
      .map(transaction => transaction.amount)
      .reduce((a,b) => a + b, 0)
      ;*/
    return total;
  }
}

module.exports = TransactionProcessor;