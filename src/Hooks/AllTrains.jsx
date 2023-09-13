import { useQuery } from "@tanstack/react-query"
const AllTrain = () => {

    const {  refetch, data: trains = [] } = useQuery({
        queryKey: ['trains'],
        queryFn: async () => {
            const res = await fetch('trains.json');
            return res.json()
        },
    })
return [refetch, trains]
}
export default AllTrain;