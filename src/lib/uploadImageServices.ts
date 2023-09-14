const uploadImageServices = async ({ page, file }: { page: string, file: File | Blob }) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async function () {
        // console.log(reader.result)
        const a = await fetch('/api/uploadImage', {
            method: 'post',
            body: JSON.stringify({ image: reader.result, directory: page }),
        })
        console.log(a)
    };
    reader.onerror = function (error) {
        console.log('Error: ', error);
    };
    // let formdata: FormData = new FormData()
    // formdata.append('image', JSON.stringify(file))
}
export default uploadImageServices