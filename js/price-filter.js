 const minInput = document.getElementById("min-price");
  const maxInput = document.getElementById("max-price");
  const minRange = document.getElementById("range-min");
  const maxRange = document.getElementById("range-max");

  function syncInputs() {
    let min = parseInt(minInput.value);
    let max = parseInt(maxInput.value);

    if (min > max) {
      [min, max] = [max, min];
    }

    minRange.value = min;
    maxRange.value = max;
  }

  function syncRanges() {
    let min = parseInt(minRange.value);
    let max = parseInt(maxRange.value);

    if (min > max) {
      [min, max] = [max, min];
    }

    minInput.value = min;
    maxInput.value = max;
  }

  minInput.addEventListener("input", syncInputs);
  maxInput.addEventListener("input", syncInputs);
  minRange.addEventListener("input", syncRanges);
  maxRange.addEventListener("input", syncRanges);