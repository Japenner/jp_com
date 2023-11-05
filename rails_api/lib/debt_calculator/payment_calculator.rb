payment = 2500
initial = 20000
debts = [
  { name: "'12-'13 (S)", balance: 2127.66, apr: 0.0425 },
  { name: "'09-'10 (U)", balance: 2400.92, apr: 0.0655 },
  { name: "'08-'09 (U)", balance: 2697.78, apr: 0.0655 },
  { name: "'08-'09 (S)", balance: 4189.65, apr: 0.0575 },
  { name: "'09-'10 (S)", balance: 5056.16, apr: 0.0535 },
  { name: "'11-'12 (S)", balance: 5781.52, apr: 0.0425 },
  { name: "'10-'11 (S)", balance: 5863.73, apr: 0.0315 },
  { name: "'13-'14 (U)", balance: 6713.63, apr: 0.0361 },
  { name: "'11-'12 (U)", balance: 9584.68, apr: 0.0655 },
  { name: "'10-'11 (U)", balance: 10100.33, apr: 0.0655 },
  { name: "'12-'13 (U)", balance: 13540.35, apr: 0.0655 }
]

puts ""
puts "Starting debt: #{debts.sum { |d| d[:balance] }}"
puts ""
puts "Monthly payment: #{payment}"
puts "Initial chunk payment: #{initial}"

[:snowball, :avalanche, :payment].each do |type|
  puts ""
  puts "#{type.upcase()}:"
  calculation = DebtCalculation.new(debts, initial, payment, type)
  puts "Total debt paid: #{calculation.total_debt_payment.floor(2)}"
  puts "Total payoff months: #{calculation.total_payoff_months}"
  puts ""
  puts "Detailed view:"
  puts calculation.payoffs.map(&:details)
end
