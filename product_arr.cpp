#include <iostream>


/*
 Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 */


//[1,2,3,4]
//[24, 12, 8, 6]
//[0,1,2,-3]
//[-6, 0, 0 ,0]



//consider 0 and negative

//1. get the product of all elements in array
//2. loop through each element and check if 0
//3. if the current element is 0 then make every other element 0 except current
//4. if not 0 then divide by current element and add to new array
//5. return the new array


vector<int> getProductSum(vector<int> &array){
  vector<int> newArray;
  int totalProd = 0;
  bool hasZero = false;
  for(int i = 0; i<array.size(); i++){
    if(array[i] == 0){
      hasZero = true;
      continue;
    }
    else{
      totalProd *= array[i];
    }
  }

 if(hasZero){
    for(int i = 0; i<array.size(); i++){
    if(array[i] != 0){
      newArray.push_back(0);
    }
    else{
      newArray.push_back(totalProd);
    }
  }
 }
 else{
    for(int i = 0; i<array.size(); i++){
      newArray.push_back(totalProd/array[i]);
  }
 }

return newArray;

}