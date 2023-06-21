export function constructOptionsQuery() {
  const mondayValue = document.getElementById("checkbox-monday").checked;
  const tuesdayValue = document.getElementById("checkbox-tuesday").checked;
  const wednesdayValue = document.getElementById("checkbox-wednesday").checked;
  const thursdayValue = document.getElementById("checkbox-thursday").checked;
  const fridayValue = document.getElementById("checkbox-friday").checked;

  const glutenValue = document.getElementById("checkbox-gluten").checked;
  const peanutsValue = document.getElementById("checkbox-peanuts").checked;
  const soyValue = document.getElementById("checkbox-soy").checked;
  const nutsValue = document.getElementById("checkbox-nuts").checked;

  var query = window.location.search;
  query = query + (mondayValue ? '&d=1' : '&d=0')
                + (tuesdayValue ? '1' : '0')
                + (wednesdayValue ? '1' : '0')
                + (thursdayValue ? '1' : '0')
                + (fridayValue ? '1' : '0');

  query = query + (glutenValue ? '&a=1' : '&a=0')
                + (peanutsValue ? '1' : '0')
                + (soyValue ? '1' : '0')
                + (nutsValue ? '1' : '0');

  return query;
};

export function constructGuestsQuery() {
  const mondayValue = document.getElementById("guests-monday").value;
  const tuesdayValue = document.getElementById("guests-tuesday").value;
  const wednesdayValue = document.getElementById("guests-wednesday").value;
  const thursdayValue = document.getElementById("guests-thursday").value;
  const fridayValue = document.getElementById("guests-friday").value;

  var query = window.location.search;
  query = query + `&g=${mondayValue}${tuesdayValue}${wednesdayValue}${thursdayValue}${fridayValue}`;

  return query;
};