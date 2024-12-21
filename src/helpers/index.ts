type convertDate = (date: string) => string

export const convertDate: convertDate = (date) => {
    const newDate = date.split('.')
    const monthNum = newDate[1] 
    let monthStr = ''
    if(monthNum === '05') {
        monthStr = 'май'
    }

    return `${newDate[0]} ${monthStr} 20${newDate[2]}, Сб`
}