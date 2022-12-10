def find_duplicate(nums_array)
  tortoise = nums_array[0]
  hare = nums_array[0]

  loop do
    tortoise = nums_array[tortoise]
    hare = nums_array[nums_array[tortoise]]

    break if tortoise == hare
 

    pointer_1 = nums_array[0]
    pointer_2 = tortoise
    while pointer_1 != pointer_2
      pointer_1 = nums_array[pointer_1]
      pointer_2 = nums_array[pointer_2]
    end
  end

  pointer_1
end

p find_duplicate([3, 1, 3, 4, 2])