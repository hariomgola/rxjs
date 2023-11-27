const data = {
  "Introcuction to RxJs": `
    # Introduction
      - RxJx stands for Reactive extension for javascript.
      - Reactive programming ia an asynchronous programming paradign concerned with data stream and the propagation of change or changes.
      - RxJs is a library for reactive programming using observables that make it easier to compare asynchronous or call-back based code.
      - RxJs provided one code type, the Observable, satellite type(Observer, Scheduler, subject) and opertaors inspire by Arrays(map, filter, reduce, every etc) to allow handling asynchronous event ad collections.

    # Observables
      - Its an data stream which is always changing.
      - RxJs introcuces Observables, a new push system for javaScript.
      - An Observables is a simple producer of multiple values, "Pushing" them tp Observers(Consumers).
      - Let's take an example of any e-commerce order journey
             orderStatus   -  undefined            -  cart is empty
             orderStatus   -  order addded         -  order is added into cart
             orderStatus   -  order placed         -  order is placed
             orderStatus   -  order received       -  order is received at vendor end
             orderStatus   -  order processed      -  order is processing to submit 
             orderStatus   -  order submitted      -  order is provided to delivery partner
             orderStatus   -  order delivered      -  order is delivered to customer
             orderStatus   -  order completed      -  order is final completed and status is closed
      - Here we can check the status at any moment to time to check the status of order.

    # Subscriber
      - It will listen to the observer for data change or any update in same.
      - Simple with above example i can check whats the status of current order.

    # Observables
      - Observables emits data over a peroid of time.
      - Observabees need to subscribed else it won't do anything on its own.
      - Observable has namely 3 methord for usecase.
             next
             complete
             error
      - Angular uses observables extensively under the hood for routing, form and almost all features.

    # Operator
      - RxJs library provided a lot of userful operators which help us write clean code and reduce lot of effort in writing custom logic.
      - Operator is a pure function.
    
    # Pure Function
      - A pure function is a simple function which take the input and return the same input
            Sample input(Hari)   -> Sample output(Hari)    Pure function don't change anything
      - An simple opertaor take in observable as input and output will also be an Observables.

    # Types of Operators
     - Creation
     - Mathamatics
     - Join
     - Transformation
     - Filtering
     - Utility
     - Conditional
     - Multicasting
     - Error Handling
    `,
  Operators: `
    # of
      - of operator is used to create and observables for string, array and object.
      - When we have to pass a variable instead of a string we want observable we can use of operator
      
    # from
      - from operator will create and object from an array.
      - It might be an array like object, a promise, an iterable object or an observable like object
      - Remeber it will take always array or array like operator. If string or number is passed for same. It will throw an error.
      
    # from Event
      - Create and observable that emits event of a specific type coming fron the given target.
      - We can bind element and methord to make sure we get observable as output.
      - Angular - we can use viewChild, nativeElement as target elements and bind events

    # Interval
      - Create an observable from the source observable only after a particulat time span has passed without another source emission.
            const number$ = interval(100);
            number$.subscribe((data) => {
              console.log(' |> ', data);
            }); 
    
    # debounceTime
      - Emits a notification from the source observable only after a particular time span has passed without another source emission.
            const number$ = interval(500);
            number$.pipe(debounceTime(100)).subscribe((data) => {
              console.log(' |> ', data);
            });
    
    # take
      - Emit only the first count value emitted by the source observable.
            const number$ = interval(500);
            number$.pipe(take(2), debounceTime(100)).subscribe((data) => {
              console.log(' |> ', data);
            });

    # takeWhile
      - Emits values emitted by the source observable so long as each value satisfies the given predicte, and the completes as soon as this prediction is not satisfied.
      - Simple takeWhile will check the condition and once satisfied it will execute it.
            const number$ = interval(500);
            number$
              .pipe(
                takeWhile((data) => {
                  return data % 2 === 0 ? true : false;
                }),
                debounceTime(100)
              )
              .subscribe((data) => {
                console.log(' |> ', data);
              });

    # takeLast
      - wait for the source to complete, Then emits the last N value from the source, as specified by the count arguments.
            const number$ = from([1, 2, 3, 4, 5, 6, 7, 8, 9]);
            number$.pipe(takeLast(2)).subscribe((data) => {
              console.log(' |> ', data);
            });
      




    `,
};
