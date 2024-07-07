function betterThanAverage(classPoints, yourPoints) {
    let sumClassPoints = 0; 

    classPoints.forEach(num => {
        sumClassPoints += num;
    });
    
    sumClassPoints += yourPoints;   // adding yourPoints to the class points
    
    let classStrength = classPoints.length + 1;    
    let classAverage = sumClassPoints / classStrength;
    
    if (yourPoints >= classAverage) {
        return true
    } else {
        return false
    }
  }
  