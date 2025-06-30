function constructionCrew (obj) {
    if (!obj.dizziness) {
        return obj;
    } else if (obj.dizziness){
        obj.levelOfHydrated += (0.1 * obj.weight * obj.experience);
        obj.dizziness = false;
        return obj;
    }

}

console.log(
 constructionCrew({ weight: 95,

    experience: 3,
    
    levelOfHydrated: 0,
    
    dizziness: false }));