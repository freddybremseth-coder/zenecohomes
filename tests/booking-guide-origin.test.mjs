import test from "node:test";
import assert from "node:assert/strict";
import { bookingGuideOrigin } from "../src/lib/booking-guide-origin.ts";
test("only exact low-cardinality guide marker accepted; campaign parameters untouched",()=>{
 assert.equal(bookingGuideOrigin("?guide_origin=buying_guide&utm_source=google"),"buying_guide");
 for(const value of ["","?guide_origin=","?guide_origin=person@example.com","?guide_origin=https%3A%2F%2Fexample.com","?guide_origin=buying_guide&guide_origin=buying_guide","?guide_origin=BUYING_GUIDE"]) assert.equal(bookingGuideOrigin(value),undefined);
});
