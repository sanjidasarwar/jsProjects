const generateBtn = document.getElementById('generateBtn')


let qrCode={
    downloadBtn: function (img) {
        const btn = document.createElement('a')
        btn.innerHTML= 'Download Code'
        btn.href=img
        btn.setAttribute('download', `qr-code`)
        return btn
    },

    codeImg : function (data) {
        const img=document.createElement('img')
        img.src=data 
        return img
    },

    render: function (data) {
        const qrCodeContainer = document.getElementById('qr-code')
        qrCodeContainer.appendChild(this.codeImg(data))
        qrCodeContainer.appendChild(this.downloadBtn(data))
    }
    
}

generateBtn.addEventListener('click', function () {
    const inputText = document.getElementById('inputText').value
    const data = `https://api.qrserver.com/v1/create-qr-code/?data=${inputText}&amp;size=100x100`

    qrCode.render(data)
})