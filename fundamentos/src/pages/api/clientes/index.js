export default function handler (req, res) {

    if(req.method === "GET") {
        handletGet(req, res)
    } else {
        res.status(405).send()
    }

    function handletGet(req, res) {
        res.status(200).json({
            id: 3,
            nome: 'Fellype',
            idade: 25
        })
    }
}