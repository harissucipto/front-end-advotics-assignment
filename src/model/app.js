import { subDays } from "date-fns";
import { action } from "easy-peasy";

const appModel = {
  dateFrom: subDays(new Date(), 1),
  dateTo: subDays(new Date(), 1),
  setDate: action((state, payload) => {
    const { dateFrom, dateTo } = payload;
    state.dateFrom = dateFrom;
    state.dateTo = dateTo;
  })
};

export default appModel;
