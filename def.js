//------ main.js ------
import {square, sum} from 'lib' ;
import * as lib from 'lib'

square(2)
sum(4, 4)

lib.square(3)
lib.sum(3, 5)
// this means import every exported module in lib and use the alias library