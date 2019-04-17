function takeElement(e){
e = e || window.event;
e = e.target || e.srcElement;
console.log(e.tagName);

}
function min_path(node1, node2) {
   if(node1 === node2) {
       return node1;
   }

   var node_1_ancestors = get_ancestors(node1);
   var node_2_ancestors = get_ancestors(node2);

   var divergent_index = 0;
   while(node_1_ancestors[divergent_index] === node_2_ancestors[divergent_index]) {
       divergent_index++;
   }

   var path = [];
   for(var i = node_1_ancestors.length - 1; i >= divergent_index - 1; i--) {
       path.push(node_1_ancestors[i].tagName);
   }
   for(var i = divergent_index; i < node_2_ancestors.length; i++) {
       path.push(node_2_ancestors[i].tagName);
   }

   return path;
}

function get_ancestors(node) {
   var ancestors = [node];
   while(ancestors[0] !== null) {
       ancestors.unshift(ancestors[0].parentElement);
   }
   return ancestors;
}
console.log(min_path(document.getElementById("mojaTabla"),document.getElementById("traka")));