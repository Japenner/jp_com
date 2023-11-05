class Payment
  attr_reader :amount, :new_balance, :interest_accrued, :payment_excess

  def initialize(amount, new_balance, interest_accrued, payment_excess)
    @amount = amount
    @new_balance = new_balance
    @interest_accrued =interest_accrued
    @payment_excess = payment_excess
  end

  def to_h
    {
      amount:,
      new_balance:,
      interest_accrued:,
      payment_excess:
    }
  end
end
