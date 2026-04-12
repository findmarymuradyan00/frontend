function primeMemo(number){
    primeMemo.cache ??= {}

    if (number in primeMemo.cache) return primeMemo.cache[number]

    if(number <= 1) return primeMemo.cache[number] = false
    if(number === 2) return primeMemo.cache[number] = true
    if(number % 2 === 0) return primeMemo.cache[number] = false

    for(let i = 3; i <= Math.sqrt(number); i += 2){
        if(number % i === 0) {
            primeMemo.cache[number] = false
            return false
        }
    }
    return primeMemo.cache[number] = true

}

function curry(fn){

    return function handler(...args){
        if(args.length >= fn.length){
            return fn(...args)
        }
        return function(...rest){
            return handler(...args, ...rest)
        }
    }

}

function trace(fn){

     function traced(...args){
        const inp = args.slice(0, fn.length)
        const out = fn(...inp)

        traced.history.push({inp, out})
        return out
    }
    traced.history = []

    return traced
}

