class Debt
  attr_accessor :name, :balance, :apr, :minimum_payment, :payments, :total, :paid

  def initialize(name, balance, apr, minimum_payment = nil)
    @name = name
    @balance = balance.floor(2)
    @total = @balance
    @apr = apr
    @minimum_payment = (minimum_payment || monthly_interest || 0).floor(2)
    @payments = []
    @paid = false
  end

  def to_h
    {
      name:,
      balance:,
      total:,
      apr:,
      minimum_payment:,
      payments:,
      paid:
    }
  end

  def pay(amount, bonus = false)
    return false if amount < minimum_payment

    make_payment(amount, bonus)
  end

  def total_paid
    payments.sum { |payment| payment[:amount] }
  end

  private

  def monthly_percentage_rate
    apr / 12
  end

  def interest(amount)
    amount * monthly_percentage_rate
  end

  def make_payment(amount, bonus)
    payment_excess = 0
    interest_accrued = 0
    new_balance = @balance - amount

    if new_balance < 0
      payment_excess = new_balance.abs.floor(2)
      new_balance = 0
    end

    if new_balance > 0 && !bonus
      interest_accrued = interest(new_balance).floor(2)
      new_balance += interest_accrued
    end

    @balance = new_balance
    @paid = @balance == 0

    @payments << Payment.new(amount, new_balance, interest_accrued, payment_excess)
  end

  def monthly_interest
    (balance * monthly_percentage_rate) + (balance * 0.01)
  end
end
