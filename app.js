function combine(input1, input2) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combinedAges = combine(30, 26);
console.log(combinedAges);
var combinedNames = combine('Max', 'Anna');
console.log(combinedNames);
//  enum Role { ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 'AUTHOR' };
//  
//  const person = {
//    name: 'Maximilian',
//    age: 30,
//    hobbies: ['Sports', 'Cooking'],
//    role: Role.ADMIN
//  };
//  
//  
//  let favoriteActivities: string[];
//  favoriteActivities = ['Sports'];
//  
//  console.log(person.name);
//  
//  for (const hobby of person.hobbies) {
//    console.log(hobby.toLocaleUpperCase());
//    // console.log(hobby.map()); // !!! ERROR !!!
//  }
//  
//  if (person.role === Role.AUTHOR) {
//    console.log('is author');
//  }
