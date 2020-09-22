const ajaxPromise = params => {
    return new Promise((resolve, reject) => {
        $.ajax({
            type: params.type || 'post',
            async: params.async || true,
            url: params.url,
            data: params.data || '',
            success: res => {
                resolve(res)
            },
            error: err => {
                reject(err)
            }
        });
    }).catch(err => console.error(err))
}