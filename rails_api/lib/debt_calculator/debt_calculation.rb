class DebtCalculation
  attr_accessor :total_debt_payment, :payoffs

  def initialize(debts, initial_payment, monthly_payment, type = :snowball)
    @debts = debts.map { |debt_hash| Debt.new(debt_hash[:name], debt_hash[:balance], debt_hash[:apr]) }
    @initial_payment = initial_payment
    @monthly_payment = monthly_payment
    @type = calc_type[type]
    @total_debt_payment = 0
    @payoffs = calculate_payoffs
  end

  def to_h
    payoffs.map(&:to_h)
  end

  def total_payoff_months
    payoffs.sort_by(&:total_payoff_months).reverse!.first.total_payoff_months
  end

  private

  attr_accessor :debts, :initial_payment, :monthly_payment, :type

  def calc_type
    {
      snowball: :balance,
      avalanche: :apr,
      payment: :minimum_payment,
    }
  end

  def sorted
    return debts.sort_by(&type).reverse! if type != :total

    debts.sort_by(&type)
  end

  def all_minimum_payments
    sorted.sum(&:minimum_payment)
  end

  def calculate_payoffs
    payment = initial_payment
    minimums = all_minimum_payments
    months = 0
    sorted.map do |debt|
      minimums -= debt.minimum_payment
      adj_payment = monthly_payment - minimums
      DebtPayoff.new(debt, adj_payment, months, payment).tap do |payoff|
        payment = payoff.leftover
        months += payoff.payoff_months
        @total_debt_payment += payoff.details[:total_paid]
      end
    end
  end
end
