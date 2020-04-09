
/*
  todo 问题描述
  一块金条切成两半，是需要花费和长度一样的铜板的。比如长度为20的金条，不管切成长度为多大的两半，都要花20个铜板。
  一群人想整分整块金条，怎么分最省铜

  例如，给定数组{10,20,30},代表共有三个人，整块金条长度为10+20+30=60。金条要分成10，20，30三个部分。如果，先把长度60的金条分成10
  和50, 花费60；再把长度50的金条分成20和30,花费50；一共花费110铜板。但是如果，先把长度为60的金条分成30和30，花费60 
  再把长度30金条分成10和20，花费30；一共花费90铜板。输入一个数组，返回分割的最小代价
*/
/* 
  todo 思路
  这个题是哈夫曼编码问题，想把金条切成规定的多少段，选择一个怎样的顺序能让代价最低。
  这个题整体就转化为：给了叶节点，选择一个什么合并顺序，能够导致非叶节点整体的求和最小。所以解题时可以反过来，把“一整条金条如何切割”
  换为，已知需要切割的长度，如何使之加起来的代价最不小
*/
/* 
  todo 步骤
  1.先把需要分割的长度，加入小根推
  2.取出小根堆里两个最小的值，合并后的值再加入小根堆
  3.一直重复第二步，直到堆里没有值，可得到最小的和
*/
function lessMoney(arr) {
  if (!arr || arr.length < 1) {
    return
  }
  let res = 0
  while (arr.length > 1) {
    let cur = pollHeap(arr) + pollHeap(arr)
    res += cur
    addHeap(arr, cur, arr.length - 1)
  }
  return res
}

function minHeap(arr) { // 建立小根堆
  
}

