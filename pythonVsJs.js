
//JS

if(grade > 85) {
    return "E";
} else if(grade>= 70) { return "S";
}else {return "F";}

//PYTHON
if grade > 85:
//instead of using brackets use indent or 4 spaces 
    return "E"
elif grade >= 70:
    return "S"
else: 
    return "F"

//JS ARRAYS
nums = [1,2,3]
nums[99] = 100
nums.length 

//PYTHON LISTS
nums = [1,2,3,4]
nums.append(5)
nums.insert(2, 2.5)
nums.remove(3)
len(nums)

//JS LOOPS

for(var i= 0; i<10; i ++ )
{
    //some code 
}

//PYTHON 

for i in Range(10):
    # some code 

nums= [1,2,3,4]
for n in num:
    # some code 


    //===== LISTS: Group of items we reference by index ==============================/
    //(mutable, duplicate items) 



//JS insert:
var my_colors = ["red", "yellow", "orange"]
my_colors.push("green")
my_colors[4]="blue"

//  PYTHON
//create it
my_colors = ["red", "orange", "yellow"]
//add vs insert
my_colors.append("green") //add to end
my_colors.insert(2, "blue") // shifts, everyting to right, to make room for value inserting (insert at i)

//JS
//removes item at i
delete my_colors[3]
//removes last item
my_colors.pop()

//Python 
//remove vs pop vs del
my_colors.remove("orange") //removes item
my_colors.pop() //removes last item
del my_colors[1] // removes item at i

//JS traverse
for(var i =0; i<my_colors.length; i++) {
    console.log(my_colors[i])
}
//Python traverse
for i in range (0, len(my_colors)): //this allows you to traverse from the beginning, and using lengths at end of your list
//access an item
print(my_colors[i])

//List Slices
//JS 
var my_colors= ["red", "yellow", "orange"]
// JS 2 indexes involved: 1st item you want: 1st item you DON'T want
var primary_colors= 
my_colors.slice(0,2) // [red, ellow]

//PYTHON
// Python 2 indexes involved: 1st item you want: 1st item you DON'T want
primary_colors = my_colors[0:2]   // [red, ellow]
//1st item you want: (goes to end)
primary_colors= my_colors[1:] //omitting 2nd value here means go to end
//1st item you Don't want //Starts at beginning
primary_colors = my_colors[:2] //omitting 1st value here means start at beginning
//copies original list
[:]


//LIST COMPREHENSIONS

var my_colors=["red", "yellow", "orange", "blue", "green"]

//JS builds new list of colors with less than 5 chars
var new_colors= []
for(c in my_colors) {
    if(c.length < 5) {
        new_colors.append(c)
    }
}

//PYTHON returns new list of colors with less than 5 characters
new_colors= [c <- can  for c in my_colors if len(c) <5]


//TUPLES - GROUP OF ITEMS WE REFERENCE BY INDEX ========================//
    //* NOT MUTABLE, DUPLICATE ITEMS



