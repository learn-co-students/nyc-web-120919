
# **Algorithms and Big O Notation**

## SWBATs

- [ ] Understand what algorithms are
- [ ] Understand why we use Big O notation to measure algorithmic efficiency
- [ ] Identify common runtimes ( constant, logarithmic, linear, quasi-linear, quadratic )
- [ ] Assess time / space tradeoffs

## What's an algorithm?

A sequential list of instructions used to have some effect, possibly based on some input 


## How do we measure the efficiency of an algorithm?

Why not just time how long it takes an algorithm to run?

1. Time it takes depends on input size.
2. Result is relative to computer.
3. Hard to know what differences matter.



Big picture facts about Big O:

1. A high-level, approximate measure of complexity.
2. Measure of the relationship between the size of the input to the algorithm and the work required to run the algorithm.
    - n is a variable that represents the size of the input
    - O is a function from that variable to an ammount of work
    - What matters: how much more work is required if we increse the input size by 1?
3. Used to measure both time complexity and space complexity.



## Common Big O Increments 

![Big O measures ](https://nedbatchelder.com/text/bigo_pix/011.png)

1. Constant Time        O(1)

    -Hash look up

2. Logarithmic Time     O(log(n))

    -binarySearch

3. Linear Time          O(n)

    -reverse
    -isPalindrome
    -findChar
    -linearSearch
    -repeatsLettersQuickly

4. Quasi-linear Time    O(n * log(n))

    -mergeSort

5. Quadratic Time       O(n^2)

    -repeatsLetters
    -selectionSort


## Guidelines for measuring Big O 

1. Ignore non-dominate terms
2. Ignore constants
3. Assume the worst case scenario
4. Nested iteration muiltiplies n, iteration back to back adds n
5. Don't assume that built in functions are constant time.
6. Hash look up is constant time, but hash storage is linear