import { PipeTransform, Pipe } from "@angular/core";

@Pipe({name : 'busFilter'})
export class BusFilter implements PipeTransform{

    transform(value , args){
        
        let searchfilter = args ? args.toLowerCase() : null;

        return searchfilter ? value.filter(bus => bus.desc.toLowerCase().indexOf(searchfilter)!=-1):value;
    }

}