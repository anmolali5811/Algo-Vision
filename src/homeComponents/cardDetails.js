import graph from "./images/graph.png";
import primes from "./images/primes.jpg";
import sort from "./sort.png";
import queen from "./images/queen.PNG";
import binSearch from "./images/binaryTree.png";
import convex from './images/convexHull.png';
import puzzle from './images/15puzzle.PNG';
import Recursion from './images/Recursion.jpg';
export function getDetails(){
   return [
       {
           id:1,
           title:"Pathfinder",
           description:"Visualize graph algorithms like dijkstra, BFS, DFS",
           route:"/pathfinder",
           img:graph
       },
       {
           id:2,
           title:"Recursion Tree",
           description:"The process in which a function calls itself directly or indirectly is called recursion. Work in progress",
           route:"/graph",
           img:Recursion
       },
       {
           id:3,
           title:"Sorting Algorithm",
           description:"Compare different sorting algorithms",
           route:"/sort",
           img:sort
       },
       {
           id:4,
           title:"Recursive Sorting",
           description:"Compare different recursive sorting algorithms",
           route:"/recursivesort",
           img:sort
       },
       {
           id:5,
           title:"N Queen",
           description:"The N queens puzzle is the problem of placing N chess queens on an N*N chessboard so that no two queens threaten each other",
           route:"/nqueen",
           img:queen
       },
       {
           id:7,
           title:"Prime Numbers",
           description:"Visualize how Seive is better than brute force",
           route:"/prime",
           img:primes
       },
       {
           id:9,
           title:"Binary Search",
           description:"Binary search is an efficient algorithm for finding an item from a sorted list of item",
           route:"/binarysearch",
           img:binSearch
       },
       {
           id:10,
           title:"15 Puzzle",
           description:"The 15 puzzle is a sliding puzzle having 15 square tiles numbered 1–15 in a frame that is 4 tiles high and 4 tiles wide, leaving one unoccupied tile position",
           route:"/15puzzle",
           img:puzzle
       }

   ]
}