import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

import { isEmpty } from "loadsh";
import SimpleReactValidator from "simple-react-validator";
import { initComment, newComment } from "../../../../redux/actions/comments";
import { Modal } from "../../../";

export default function PageComment({ styles, data, loading, pageId }) {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [, forceUpdate] = useState();

  const location = useRouter();
  const dispatch = useDispatch();

  const open = () => setShowModal(true);
  const close = () => setShowModal(false);

  useEffect(() => {
    return () => {
      setTitle("");
      setBody("");
      validator.current.hideMessages();
      forceUpdate();
    };
  }, [showModal]);

  const validator = useRef(
    new SimpleReactValidator({
      messages: {
        required: "پر کردن این فیلد الزامی می باشد",
      },
      element: (message) => (
        <>
          <div className="error-icon" />
          <div className="mr-5 text-red-500">{message}</div>
        </>
      ),
    })
  );

  const handlepageChange = (id) => {
    dispatch(initComment(location.query.id, id.split("=")[1]));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validator.current.allValid()) {
      const data = {
        pageId,
        title,
        body,
      };
      dispatch(newComment(data, close));
    } else {
      validator.current.showMessages();
      forceUpdate(1);
    }
  };
  return (
    <>
      <div className={styles.courseReviews}>
        <div className={styles.courseReviewTitle}>
          <h3 className={styles.inner}>
            <span className="mdi mdi-comment-text-multiple mdi-24px ml-2" />
            <span>نظرات </span>
          </h3>
          <button
            onClick={open}
            className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
          >
            <span className="mdi mdi-comment-edit-outline ml-2" />
            <span>افزودن نظر</span>
          </button>
        </div>
        <div className={styles.courseComment}>
          <ul className={styles.courseComment__list}>
            {loading ? (
              <li className={styles.review}>
                <div className="animate-pulse flex space-x-4">
                  <div className="flex-1 space-y-6 py-1">
                    <div className="grid grid-rows-1 gap-4">
                      <div className="h-3 bg-slate-200 rounded w-1/4"></div>
                      <div className="h-3 bg-slate-200 rounded w-1/4"></div>
                    </div>
                    <div className="h-3 bg-slate-200 rounded w-1/2"></div>
                    <div className="space-y-3">
                      <div className="h-3 bg-slate-200 rounded"></div>
                    </div>
                  </div>
                </div>
              </li>
            ) : !isEmpty(data.data) ? (
              data.data.map((comment) => (
                <li className={styles.review} key={comment.id}>
                  <div className={styles.commentContainer}>
                    <div className={styles.commentText}>
                      <div className={styles.commentHeader}></div>

                      <div className={styles.description}>
                        <div className="mt-4 border-b-4 border-gray-300">
                          <div className="font-bold flex justify-between text-base px-4 py-2 bg-gray-100 text-gray-500">
                            <h5 className={styles.commentAuthor}>
                              {comment.user_ip}
                            </h5>
                            <time>
                              {new Date(comment.created_at).toLocaleDateString(
                                "fa-IR"
                              )}
                            </time>
                          </div>
                        </div>
                        <div className="text-sm px-4 py-4 bg-orange-50 ">
                          <div className="border-r-4 border-orange-300 mb-4">
                            <h5 className="font-bold text-base pr-4 py-2 bg-orange-100 ">
                              {comment.comment_title}
                            </h5>
                          </div>
                          <span className="pr-4 ">{comment.comment_body}</span>
                          {comment.reply && (
                            <ul className={styles.children}>
                              <li className={styles.comment}>
                                <div className={styles.commentContainer}>
                                  <div className={styles.commentAvatar}></div>

                                  <div className={styles.commentText}>
                                    <div className={styles.commentHeader}>
                                      <h5 className={styles.commentAuthor}>
                                        نمایندگی بابازاده
                                      </h5>

                                      <time>
                                        {new Date(
                                          comment.updated_at
                                        ).toLocaleDateString("fa-IR")}
                                      </time>
                                    </div>

                                    <div className={styles.description}>
                                      <div className="text-sm pr-4 py-8  bg-orange-50">
                                        {comment.reply}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))
            ) : (
              <li className="text-center my-8 bg-gray-100 p-4 text-gray-500 border-r-4 border-gray-200">
                نظری ثبت نشده است
              </li>
            )}
          </ul>
        </div>
        {data.total > 2 && (
          <div className="flex flex-col items-center mt-4">
            <div className="inline-flex mt-2 xs:mt-0">
              <button
                disabled={isEmpty(data.prev_page_url)}
                onClick={() =>
                  handlepageChange(
                    !isEmpty(data.prev_page_url)
                      ? data.prev_page_url.split("?")[
                          data.prev_page_url.split("?").length - 1
                        ]
                      : ""
                  )
                }
                className="py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                قبل
              </button>
              <button
                disabled={isEmpty(data.next_page_url)}
                onClick={() =>
                  handlepageChange(
                    !isEmpty(data.next_page_url)
                      ? data.next_page_url.split("?")[
                          data.next_page_url.split("?").length - 1
                        ]
                      : ""
                  )
                }
                className="py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-l border-0 border-l border-gray-700 hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                بعد
              </button>
            </div>
          </div>
        )}
      </div>
      <Modal title="افزودن نظر" showModal={showModal} closeModal={close}>
        <form className="p-8" onSubmit={() => handleSubmit(event)}>
          <div className="flex items-center py-2 mb-4">
            <label className="flex-1">
              <input
                className="appearance-none bg-gray-800 border-none w-full text-gray-100 mr-3 py-2 px-2 leading-tight focus:outline-none "
                type="text"
                name="title"
                placeholder="موضوع"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
              {validator.current.message("title", title, "required")}
            </label>
          </div>
          <div className="flex items-center py-2 mb-4">
            <label className="flex-1">
              <textarea
                className="resize-none appearance-none bg-gray-800 border-none w-full text-gray-100 mr-3 py-1 px-2 leading-tight focus:outline-none h-28"
                placeholder="شرح"
                value={body}
                name="body"
                onChange={(event) => setBody(event.target.value)}
              />
              {validator.current.message("body", body, "required")}
            </label>
          </div>
          <div className="flex justify-end">
            <button className="flex-shrink-0 bg-green-500 px-8 hover:bg-green-700 border-green-500 hover:border-green-700 text-sm border-4 text-white py-1 rounded">
              ثبت
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
}
