export const format = (time) => {

    const date = new Date(time);
    const localeDate = date.toLocaleString();
    const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    return formattedDate;

}