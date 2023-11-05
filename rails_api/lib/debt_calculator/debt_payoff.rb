class DebtPayoff
  attr_accessor :payoff_months, :detailed_view, :debt, :details, :leftover

  def initialize(debt, payment, additional_months = 0, surplus = 0)
    @surplus = surplus
    @apr = debt.apr
    @payment = payment
    @additional_months = additional_months
    @debt = debt
    @payoff_months = 0
    @total_interest = 0
    @details = {}

    generate_payments

    @leftover = debt.payments&.last.payment_excess
  end

  def to_h
    {
      debt: debt.to_h,
      payment:,
      surplus:,
      payoff_months:,
      total_payoff_months:,
      total_interest:,
      total_paid:,
      total_debt:,
      leftover:,
      details:
    }
  end

  def total_paid
    @total_paid ||= ((additional_months * debt.minimum_payment) + (@payoff_months * payment) + surplus).floor(2)
  end

  def total_payoff_months
    additional_months + payoff_months
  end

  private

  attr_accessor :payment, :surplus, :total_interest, :additional_months

  def generate_payments
    surplus_payment = surplus
    @details[:initial_balance] = debt.balance
    while debt.balance > 0
      surplus_payment > 0 ? debt.pay(surplus_payment, true) : debt.pay(payment)
      surplus_payment = debt.payments&.last&.payment_excess || 0
    end
    @details[:total_paid] = (debt.payments&.sum(&:amount) - debt.payments&.last&.payment_excess) || 0
    @details[:payments] = debt.payments&.map(&:to_h)
  end

  def total_debt
    debt.total_paid + debt.balance
  end
end
