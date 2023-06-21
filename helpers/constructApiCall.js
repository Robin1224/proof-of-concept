export default function constructApiCall(query) {
  if (query.d[0] == 1) {
    if (query.g[0] && query.g[0] > 0) {
      var Monday = query.name + " + " + query.g[0]
    } else {
      var Monday = query.name
    };
  };

  if (query.d[1] == 1) {
    if (query.g[1] && query.g[1] > 0) {
      var Tuesday = query.name + " + " + query.g[1]
    } else {
      var Tuesday = query.name
    };
  };

  if (query.d[2] == 1) {
    if (query.g[2] && query.g[2] > 0) {
      var Wednesday = query.name + " + " + query.g[2]
    } else {
      var Wednesday = query.name
    };
  };

  if (query.d[3] == 1) {
    if (query.g[3] && query.g[3] > 0) {
      var Thursday = query.name + " + " + query.g[3]
    } else {
      var Thursday = query.name
    };
  };

  if (query.d[4] == 1) {
    if (query.g[4] && query.g[4] > 0) {
      var Friday = query.name + " + " + query.g[4]
    } else {
      var Friday = query.name
    };
  };

  let payload = { 
    id: "INCREMENT", 
    Monday: Monday, 
    Tuesday: Tuesday, 
    Wednesday: Wednesday,
    Thursday: Thursday,
    Friday: Friday,
    Gluten: (query.a[0] == 1 ? "x" : ""),
    Peanuts: (query.a[1] == 1 ? "x" : ""),
    Soy: (query.a[2] == 1 ? "x" : ""),
    Nuts: (query.a[3] == 1 ? "x" : ""),
  }
  return payload
}