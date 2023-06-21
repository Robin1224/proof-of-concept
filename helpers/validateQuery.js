export default function validateQuery(page, query) {
  var initialConditions = [];
  var lengthConditions = [];
  var symbolConditions = [];

  switch (page) {
    case "options":
      if ("name" in query) {
        if (query.name.length > 0) {
          return true;
        }
        return false;
      }
    case "guests":
      initialConditions = ["name" in query, "d" in query, "a" in query];

      lengthConditions = [
        query.name.length > 0,
        query.d.length === 5,
        query.a.length === 4,
      ];

      if (!initialConditions.includes(false)) {
        if (!lengthConditions.includes(false)) {
          return true;
        }
        return false;
      }
      return false;
    case "confirmation":
      initialConditions = [
        "name" in query,
        "d" in query,
        "a" in query,
        "g" in query,
      ];

      lengthConditions = [
        query.name.length > 0,
        query.d.length === 5,
        query.a.length === 4,
        query.g.length === 5,
      ];

      symbolConditions = [
        new RegExp("^[A-Za-z]+$").test(query.name),
        new RegExp("^[01]+$").test(query.d),
        new RegExp("^[01]+$").test(query.a),
        new RegExp("^\\d+$").test(query.g),
      ];

      if (!initialConditions.includes(false)) {
        if (!lengthConditions.includes(false)) {
          if (!symbolConditions.includes(false)) {
            return true;
          }
          return false;
        }
        return false;
      }
      return false;
    case "finish":
      initialConditions = [
        "name" in query,
        "d" in query,
        "a" in query,
        "g" in query,
      ];

      lengthConditions = [
        query.name.length > 0,
        query.d.length === 5,
        query.a.length === 4,
        query.g.length === 5,
      ];

      symbolConditions = [
        new RegExp("^[A-Za-z]+$").test(query.name),
        new RegExp("^[01]+$").test(query.d),
        new RegExp("^[01]+$").test(query.a),
        new RegExp("^\\d+$").test(query.g),
      ];

      if (!initialConditions.includes(false)) {
        if (!lengthConditions.includes(false)) {
          if (!symbolConditions.includes(false)) {
            return true;
          }
          return false;
        }
        return false;
      }
      return false;
  }
}
