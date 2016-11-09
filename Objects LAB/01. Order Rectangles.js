function solve(rectsData){
    let rectangles = [];
    for(let [width, height] of rectsData){
        rectangles.push(createRect(width, height));

    }
    rectangles.sort((a,b)=> a.compareTo(b));
        return rectangles;

    function createRect(width, height) {
        let rect = {
            width: width,
            height: height,
            area: () => rect.width * rect.height,
            compareTo: function (other) {
                let result = other.area() - rect.area();
                return result || (other.width - rect.width)
            }
        };
        return rect;
    }

}