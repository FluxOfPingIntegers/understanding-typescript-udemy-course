function combine(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(30, 26);
console.log(combinedAges);

const combinedNames = combine('Max', 'Anna');
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