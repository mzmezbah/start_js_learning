// OBJ- In js, which data stored in carli_bracket(seceond_bracket) is caled object.
//      In js, u can create a object in two differnt ways like -
         var obj = {};
         // var obj1 = new object;
     // In js, every data stored in a different key(name:'') and key&valu is called "key valu pair".
     // In every key and value middle, u must be need to use a semi_colon(:) and after need to use a coma(,).
     // in js, if u want call or findout a single value, u can call this value in two differnt way.
     //    1.dot notation: here u need to call first obj name then give a dot and call this value key(object.key).
     //    2.bracket notation: here u need to call first  obj name then give a third bracket and u need give the
     //    key of this value as string in this bracket(object['key']).
     //  in js, u can push any data in obj easily. For this u need to call obj name first then give a dot sign and
     //  give the key name then give a equal sign and then give the value name with datatype. Like -
       obj.name ='mezbah';
       obj.age = 21;
       obj.workAt = 'student';

       console.log(obj);
       // in js, if u want to traverse any obj data then u need to use for-in loof. here forin loof, syntax look like for loof
       // Here in variable u need give property name. then give in and then give object name. then print it.if you give property value
       // u need need to give 0bj name then give third-bracket and in this u need us property name.

       for(var props in obj) {
         console.log(props + '= ' + obj[props]);
       }



    
