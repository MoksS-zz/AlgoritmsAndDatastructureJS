const graph = {};
graph['start'] = {};
graph['start']['a'] = 6;
graph['start']['b'] = 2;
graph["a"] = {};
graph["a"]["fin"]=1;
graph["b"] = {};
graph["b"]["a"] = 3;
graph["b"]["fin"] =5;
graph["fin"] = {};

costs = {};
costs["a"] = 6;
costs["b"] = 2;
costs["fin"] = Infinity;

processed = new Set();

parents = {};
parents["a"] = "start";
parents["b"] = "start";
parents["fin"] = 'None';


function find_lowest_cost_node(costs){
    let lowest_cost = Infinity;
    let lowest_cost_node = 'None';
    for(let node in costs){
        let cost = costs[node];
        if(cost < lowest_cost && !processed.has(node)){
            lowest_cost = cost;
            lowest_cost_node = node;
        };
    };
    return lowest_cost_node;
};

let node = find_lowest_cost_node(costs);
while(node!== "None"){
    let cost = costs[node];
    let neighbors = graph[node];
    console.log(neighbors);
    for(let n in Object.keys(neighbors)){
        let new_cost = cost + neighbors[n];
        if(costs[n] > new_cost){
            costs[n] = new_cost;
            parents[n] = node;
        };
    };
    processed.add[node];
    node = find_lowest_cost_node(costs)
};